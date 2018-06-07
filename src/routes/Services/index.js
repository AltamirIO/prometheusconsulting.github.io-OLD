import React from "react";
import { DefaultLayout } from "../../layouts";
import "./Services.css";
import { Section, Content, Title } from "prometheusui";

class Services extends React.Component {
  render() {
    console.log(this.props.locationw);
    return (
      <DefaultLayout location={this.props.location}>
        <Section>
          <Section.Title>Our Services</Section.Title>
          <Content isCentered>
            <Title is1>What We Do</Title>
            <p>We can make your vision a reality.</p>
            <p>
              Prometheus builds apps that solve problems in your business. We
              can help you bring a new application to market, or turn an
              unwieldy collection of spreadsheets into powerful, useful
              insights. Technology can augment the reach and efficiency of your
              company, and our talented designers and engineers have the skills
              to help you transform your business.
            </p>
            <Title is3>The process.</Title>
            <p>
              You get an unbilled meeting with us to talk about what a solution
              might look like. We send in the A-Team to understand your problem
              and how we will work with you to solve it. Together, we'll lay out
              a roadmap of the solution and what it will take to get to the end
              goal.
            </p>
            <p>
              We take the hassle and headache out of development. After all, you
              have more important things to worry about. We have skilled
              designers and developers that will ensure your project is a
              success. We believe in communication. Our work is divided into
              small sprints, and we will check in with you at the end of each
              sprint to make sure our team is capturing your vision and easing
              the pain points you set out to solve.
            </p>
            <p>
              At the end of the process, we know you will love the product. Our
              focus on quality code means that you will have an application that
              will be easy to maintain and painless to grow. When it comes to
              quality, we do not cut corners.
            </p>
            <Title is3>The priorities.</Title>
            <ol>
              <li>
                <strong>Great code.</strong> No one cares about deadlines if the
                product doesn't work. Working products are our #1 priority. We
                define a successful product as one that meets your needs now and
                can be extended in the future.
              </li>
              <li>
                <strong>On time.</strong> Don’t settle for unpredictability. We
                believe in being open and communicative. Your business revolves
                around good information. We recognize that, and we want to
                understand your needs so we can set a project timeline that
                makes sense for your circumstances. Our commitment is to deliver
                quality on time.
              </li>
            </ol>
          </Content>
        </Section>
      </DefaultLayout>
    );
  }
}

export default Services;
