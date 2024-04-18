import type { Metadata } from 'next';
import { Lato, Lora } from 'next/font/google';
import './globals.css';
import { Layout } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { AvatarAndSocial } from './components/ProfileIntro';

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
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <AntdRegistry>
          <Layout className="chanh-layout-wrapper">
            <Header id="chanh-header" className="chanh-nav">
              The Header
            </Header>
            <Layout hasSider className="chanh-layout-wrapper">
              <Sider id="chanh-sider" className="chanh-nav">
                <AvatarAndSocial></AvatarAndSocial>
              </Sider>
              <Layout className="chanh-layout-wrapper">
                <Content id="chanh-content-wrapper">{children}</Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}