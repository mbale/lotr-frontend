import React, { ReactNode } from 'react';
import { Layout as BaseLayout } from 'antd';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Header from 'app/landing/header';

const { Content: BaseContent } = BaseLayout;

const Layout = styled(BaseLayout)`
  ${tw`
    w-screen h-screen
  `}
`;

const Content = styled(BaseContent)`
  ${tw`
    px-5 py-8
  `}
`;

type LandingLayoutProps = {
  children: ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => (
  <Layout>
    <Header />
    <Content className="px-5 py-8">
      { children }
    </Content>
  </Layout>
);

export default LandingLayout;
