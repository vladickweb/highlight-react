import React, { createElement } from 'react'

interface IProps {
  children: any
  search?: string
}

export default function Highlight({ children, search }: IProps) {

  if (!search) {
    return children
  }

  const markSearch = (
    children: any,
    HTMLtype?: any
  ): JSX.Element[] | JSX.Element | string => {
    const isString = typeof children === 'string'
    const isArray = Array.isArray(children as JSX.Element[])
    const isElement = !isString && !isArray
    const regex = new RegExp(search, 'gi')

    if (isString) {
      const markedElementString = children.replace(regex, (match: string) => {
        return `<mark>${match}</mark>`
      })

      return createElement(HTMLtype || 'span', {
        dangerouslySetInnerHTML: { __html: markedElementString }
      })
    }

    if (isArray) {
      return children.map((child: JSX.Element) => markSearch(child))
    }

    if (isElement) {
      const { children: childChildren, ...props } = children.props
      const newChildren = markSearch(childChildren)
      return createElement(HTMLtype || children?.type, {
        ...props,
        children: newChildren
      })
    }

    return children
  }

  return <>{markSearch(children)}</>
}