'use client';

import { Divider, Image, Skeleton } from 'antd';
import { useEffect, useState } from 'react';

import { AvatarAndSocial, ChanhUpdatesTable } from './components';
import DataSource from './DataSource';
import { Update } from './types';

export default function Home() {
  const [data, setData] = useState<Update[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DataSource.UPDATES)
      .then((res) => res.json())
      .then((data: Update[]) => {
        setData(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <>
      <AvatarAndSocial className="avatar-and-social--mobile" />
      <div id="about-me">
        <h1>About Me</h1>
        <Divider />
        <span className="block">
          {/* A passionate researcher with concentration on multimedia technologies,
          quality of experience, and smart systems. A self-sufficient engineer
          who actively learns and adapts required frameworks for industrial
          development. A globalized person who engages in international research
          collaboration activities. A reliable advisor who is always willing to
          guide junior students.
          <br />
          <br /> */}
          Hello! I am <strong>Chanh Minh Tran</strong> (
          <strong>Dr. Chanh</strong>). I am from Ho Chi Minh City, Vietnam{' '}
          <Image
            preview={false}
            className="inline-block !align-top !w-7"
            src="https://img.icons8.com/color/48/vietnam.png"
            alt="vietnam"
          />
          <br />
          <br />I received my B.Eng. degree in Computer Science and Engineering
          from Ho Chi Minh City University of Technology (HCMUT), Vietnam in
          2018.
          <br />
          <br />
          After that, I pursued the M.Eng. degree in Electrical Engineering and
          Computer Science, and Ph.D. degree in Functional Control Systems at{' '}
          <em className="not-italic">Shibaura Institute of Technology</em>{' '}
          (SIT), Japan from 2018 to 2023, under the sponsorship of{' '}
          <em className="not-italic">JICA Innovative Asia</em> program (M.Eng.),
          SIT Scholarship for Foreign Graduate Students (Ph.D., 1st year), and{' '}
          <em className="not-italic">MEXT</em> Scholarship (Ph.D., 2nd & 3rd
          year). Then, I extended my time at SIT as a{' '}
          <em className="not-italic">Postdoctoral Research Fellow</em> until
          July 2025.
          <br />
          <br />
          Since August 2025, I have been a{' '}
          <em className="not-italic">Project Assistant Professor</em> at the{' '}
          <em className="not-italic">
            Joint Support-Center for Data Science Research
          </em>{' '}
          (<em className="not-italic">ROIS-DS</em>). I belong to the Center for
          Social Data Structuring, where I have been appointed to a research
          project on data privacy.
          <br />
          <br />
          My research interests are Multimedia Technology, Computer Networking,
          Internet of Things, Embedded Systems, and Accessible Computing.
          <br />
          <br />I love playing with microcontrollers, microcomputers, and
          electronic devices. I have been a fan of the Arsenal F.C. since 2011.
          I love traveling, photography, cooking, and Doraemon.
        </span>
      </div>

      <div id="contact" className="pt-10">
        <h1>Contact</h1>
        <Divider />
        <h2>Address</h2>
        <p>Research Organization of Information and Systems (ROIS)</p>
        <p>Joint Support-Center for Data Science Research (ROIS-DS)</p>
        <p>10-3 Midori-cho, Tachikawa, Tokyo 190-8562, Japan</p>
        <h2 className="pt-4">Email</h2>
        <p>chanh &#128073; ism &#11037; ac &#11037; jp</p>
      </div>

      <div id="news-short" className="pt-10">
        <h1>Latest News & Updates</h1>
        <Divider />
        {isLoading ? (
          <Skeleton active />
        ) : (
          <span className="block text-right">
            <ChanhUpdatesTable data={data} />
            <a className="chanh-link" href="/updates">
              More...
            </a>
          </span>
        )}
      </div>
    </>
  );
}
