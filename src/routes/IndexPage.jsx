import React from 'react';
import Header from '../components/IndexPage/Header';
import InputBox from '../components/IndexPage/InputBox';
import Policy from '../components/IndexPage/Policy'
import Live from '../components/IndexPage/Live'
import Teacher from '../components/IndexPage/Teacher'
import Course from '../components/IndexPage/Course'
import Activity from '../components/IndexPage/Activity'
import Information from '../components/IndexPage/Information'
import Footer from '../components/IndexPage/Footer'


function IndexPage() {
  return (
    <div>
      <Header></Header>
      <InputBox></InputBox>
      <Policy />
      <Live />
      <Teacher />
      <Course />
      <Activity />
      <Information />
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
};

export default IndexPage;
