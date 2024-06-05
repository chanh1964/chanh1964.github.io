'use client';

import { Image, Space } from 'antd';
import { useState } from 'react';

import { ChanhSocialButton } from './';
import { Email, GoogleScholar, LinkedIn, ResearchGate } from './icons/socials';

type Props = {
  className?: string;
};

export function AvatarAndSocial(props: Props) {
  const [copyText, setCopyText] = useState<string>('Click to Copy');

  return (
    <Space
      className={`avatar-and-social ${props.className}`}
      direction="vertical"
      size="middle"
    >
      <Image
        preview={false}
        className={`avatar-and-social__avatar`}
        src="/avatar.jpg"
        alt="Avatar"
      />
      <Space direction="vertical" size={2}>
        <h1 className="avatar-and-social__name">CHANH MINH TRAN, PhD</h1>
        {/* <p className="avatar-and-social__name__note">(Dr. Chanh)</p> */}
      </Space>
      <div className="avatar-and-social__social">
        <ChanhSocialButton
          icon={<LinkedIn className="avatar-and-social__social__icon" />}
          href="https://www.linkedin.com/in/chanh1964/"
          tooltipText="LinkedIn"
        />
        <ChanhSocialButton
          icon={<GoogleScholar className="avatar-and-social__social__icon" />}
          href="https://scholar.google.com/citations?user=wNwXJWkAAAAJ&hl=en"
          tooltipText="Google Scholar"
        />
        <ChanhSocialButton
          icon={<ResearchGate className="avatar-and-social__social__icon" />}
          href="https://www.researchgate.net/profile/Chanh-Tran-3"
          tooltipText="Research Gate"
        />
        <ChanhSocialButton
          icon={<Email className="avatar-and-social__social__icon" />}
          tooltipText={
            <p className="text-center">
              <span className="underline p-1">
                tran.chanh.r4[at]shibaura-it.ac.jp
              </span>
              <br />
              {copyText}
            </p>
          }
          onClick={() => {
            navigator.clipboard.writeText('tran.chanh.r4[at]shibaura-it.ac.jp');
            setCopyText('Copied to Clipboard');
            setTimeout(() => setCopyText('Click to Copy'), 2000);
          }}
        />
      </div>
    </Space>
  );
}
