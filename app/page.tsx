import { Divider } from 'antd';

export default function Home() {
  return (
    <>
      <div id="about-me">
        <h1>About Me</h1>
        <Divider />
        <span className="block text-justify hyphens-auto">
          {/* A passionate researcher with concentration on multimedia technologies,
          quality of experience, and smart systems. A self-sufficient engineer
          who actively learns and adapts required frameworks for industrial
          development. A globalized person who engages in international research
          collaboration activities. A reliable advisor who is always willing to
          guide junior students.
          <br />
          <br /> */}
          <strong>Chanh Minh Tran</strong> (<strong>Dr. Chanh</strong>) received
          his B.Eng. degree in Computer Science and Engineering from Ho Chi Minh
          City University of Technology (HCMUT), Vietnam in 2018. After that, he
          pursued his M.Eng. degree in Electrical Engineering and Computer
          Science, and Ph.D. degree in Functional Control Systems at Shibaura
          Institute of Technology (SIT), Japan from 2018 to 2023, under the
          sponsorship of JICA Innovative Asia program (M.Eng.), SIT Scholarship
          for Foreign Graduate Students (Ph.D., 1st year), and MEXT Scholarship
          (Ph.D., 2nd & 3rd year).
          <br />
          <br />
          His research interests includes Multimedia Technology, Computer
          Networking, Internet of Things, Embedded Systems, and Accessible
          Computing
          <br />
          <br />
          Currently, Dr. Chanh is a Postdoctoral Research Fellow in Innovative
          Global Program, College of Engineering, SIT. He belongs to Mobile
          Multimedia Communications Laboratory, where he has been appointed to a
          research project about assistive technology for visually impaired
          people.
          <br />
          <br />
          Besides research duty, Dr. Chanh is in charge of the "Java Programming
          Experiment" class (full responsibility) and the "Information &
          Communication Seminar" class (teaching assistant) for 3rd-year
          undergraduate students. He jointly conducts research guidance for
          4th-year undergraduate and master's students in the lab. He also
          actively engages in organizing the international collaboration events
          in the department.
        </span>
      </div>

      <div id="news-short" className="pt-10">
        <h1>Latest News & Updates</h1>
        <Divider />
        <span className="block text-justify hyphens-auto">
          <a href="/updates">More...</a>
        </span>
      </div>
    </>
  );
}
