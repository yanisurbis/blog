import React from 'react';

const CV = () => {
  return <>
    <main>
      <h1>Yanis Urbis</h1>
      <span>Software Engineer</span>
      <section>
        <h2>Contacts</h2>
        <ul>
          <li><span>Telephone</span><span>+7 (967) 075-46-02</span></li>
          <li><span>Email</span><span>yanis.urbis@gmail.com</span></li>
          <li><span>Telegram</span><span>t.me/urbis</span></li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>SmartAgent</h3>
            <span>2019, Jan - Present</span>
            <span>Frontend developer, Remote</span>
            <ul>
              <li>Mantaining existing application</li>
              <li>Incrementally rewrting RxJS + Redux functionality to pure React</li>
              <li>Bringing Typescript </li>
            </ul>
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
      </section>
    </main>
  </>
};

export default CV;
