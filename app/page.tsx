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
          2018. After that, I pursued the M.Eng. degree in Electrical
          Engineering and Computer Science, and Ph.D. degree in Functional
          Control Systems at{' '}
          <em className="not-italic">Shibaura Institute of Technology</em>{' '}
          (SIT), Japan from 2018 to 2023, under the sponsorship of{' '}
          <em className="not-italic">JICA Innovative Asia</em> program (M.Eng.),
          SIT Scholarship for Foreign Graduate Students (Ph.D., 1st year), and{' '}
          <em className="not-italic">MEXT</em> Scholarship (Ph.D., 2nd & 3rd
          year).
          <br />
          <br />
          My research interests are Multimedia Technology, Computer Networking,
          Internet of Things, Embedded Systems, and Accessible Computing.
          <br />
          <br />
          Since 2023, I have been a{' '}
          <em className="not-italic">Postdoctoral Research Fellow</em> in the{' '}
          <em className="not-italic">Innovative Global Program</em> at the{' '}
          <em className="not-italic">College of Engineering</em>, SIT. I belong
          to the Mobile Multimedia Communications Laboratory, where I have been
          appointed to a research project on assistive technology for visually
          impaired people.
          <br />
          <br />
          Besides research duties, I have been in charge of the{' '}
          <em className="not-italic">Java Programming Experiment</em> class
          (since my doctoral course) for 3rd-year undergraduate students. I
          jointly conduct research guidance for 4th-year undergraduate and
          master&lsquo;s students in the lab. I also actively participate in
          international collaboration events in the department.
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
        <p>Mobile Multimedia Communications Laboratory</p>
        <p>Shibaura Institute of Technology</p>
        <p>Toyosu Campus, Main Building, 11F07</p>
        <p>3-7-5 Toyosu, Koto, Tokyo 135-8548, Japan</p>
        <h2 className="pt-4">Email</h2>
        <p>tran.chanh.r4[at]shibaura-it.ac.jp</p>
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
