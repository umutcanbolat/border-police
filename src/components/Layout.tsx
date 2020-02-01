import * as React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

interface Props {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Home' }) => (
  <div>
    <Head>
      <title>{title + ' - Border Police'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <NavBar />

    {children}

    <style jsx global>{`
      html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      html,
      body {
        width: 100%;
        height: 100%;
      }

      body {
        margin: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
          'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        font-variant: tabular-nums;
        line-height: 1.5;
        background-color: #fff;
        -webkit-font-feature-settings: 'tnum';
        font-feature-settings: 'tnum', 'tnum';
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  </div>
);

export default Layout;
