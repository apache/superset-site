import React from 'react'
import { theme, useConfig } from 'docz'
import { ThemeProvider } from 'theme-ui'
import Layout from '../components/layout';
import NextLinks from '../components/next';

import 'antd/dist/antd.css';
const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <Layout> 
        { children }
        <div>
          <NextLinks />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

//@ts-ignore
export default theme()(Theme)
