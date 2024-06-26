import './globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import type { Metadata } from 'next';
import { Lato, Lora } from 'next/font/google';
import React, { ReactNode } from 'react';

import { AvatarAndSocial, Navigation } from './components';
import MobileNavigation from './components/MobileNavigation';

const sans = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-sans',
});

const serif = Lora({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Dr. Chanh Minh Tran's webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <AntdRegistry>
          <Layout className="chanh-layout-wrapper">
            <Header id="chanh-header" className="chanh-nav">
              <MobileNavigation />
            </Header>
            <Layout hasSider className="chanh-layout-wrapper overflow-hidden">
              <Sider id="chanh-sider" className="chanh-nav">
                <AvatarAndSocial />
                <Navigation />
              </Sider>
              <Layout
                className="chanh-layout-wrapper"
                id="chanh-content-wrapper__outer"
              >
                <Content id="chanh-content-wrapper">
                  {children}
                  <br />
                  <br />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
