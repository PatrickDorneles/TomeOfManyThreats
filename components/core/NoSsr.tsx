import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

const NoSsr: FC<PropsWithChildren> = props => (
  <>{props.children}</>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})