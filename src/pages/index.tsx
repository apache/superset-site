import React, { useState, useRef, useEffect}from 'react';
import { theme, useConfig } from 'docz';
import { Link } from "gatsby"
import { ThemeProvider } from 'theme-ui';
import { Button, Col, Carousel } from 'antd';
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import { 
  BarChartOutlined, 
  PieChartOutlined, 
  DotChartOutlined,
  BoxPlotOutlined,
} from '@ant-design/icons';

import { Databases } from '../resources/data';
import Layout from '../components/layout';
import Image from '../components/image';
import 'antd/dist/antd.css';

const { colors } = supersetTheme;

const titleContainer= css`
  position: relative;
  text-align: center;
  padding-top: 211px;
  padding-bottom: 200px;
  background-image: url('/images/data-point.jpg');
  background-size: cover;
  Button {
    margin-top: 39px
  }
  .alert {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
    max-width: 600px;
    margin: 0 auto ;
    padding: .75rem 1.25rem;
    margin-top: 83px;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
`;

const title = css`
  color:${colors.grayscale.dark2};
  font-size: 60px;
`;

const secondaryHeading = css`
  font-size: 55px; 
  text-align: center;
`;

const featureHeight="160";

const featureSectionStyle= css`
  background: #fff;
  padding: 5vw 0;
  margin-top: 50px;
  margin-bottom: 30px;
  .featureList {
    padding: 0px;
    width: 100%;
    list-style-type: none;
    margin: 0 auto;
    max-width: 1000px;
    margin-top: 40px;
    .feature {
      display: flex;
      margin: 10px;
      .imagePlaceHolder {
        display: block;
        position: relative;
        min-width: ${featureHeight}px;
        min-height: ${featureHeight}px;
        background: white;
        flex-grow: 1;
        svg {
          position: absolute; 
          width: 60px;
          height: 60px; 
          right: 10px;
          left: 72px;
          top: 35px;
        }
      }
      .featureText {
        display: block;
        padding-top: 30px;
        flex-grow: 6;
        font-size: 20px;
        color:${colors.grayscale.dark2};
        line-height: 25px;
        letter-spacing: 1px;
      }
    }
  }
  .heading {
      font-size: 25px;
      width: 60%;
      margin: 0 auto;
  }
`;

const integrationSection = css`
  background: white;
  margin-bottom: 150px;
  .databaseSub {
    text-align: center;
    display: block;
    margin-bottom: 40px; 
  }

  .databaseList {
    margin-top: 100px;
    list-style-type: none;
    padding: 0px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
    a {
      margin: 20px;
    }
  }

`;

const linkCarousel = css`
  .toggleContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    .toggleBtns {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .toggle {
        margin: 15px;
        color: #bfbfbf;
        border: 1px solid #bfbfbf;
        border-radius: 3px;
        padding: 30px;
        &:hover {
          cursor: pointer;
          color:${colors.primary.base};
          border: 1px solid ${colors.primary.base};
        }
      }
    }
    .imageContainer {
      img {
        height: 400px;
        display: block;
        margin: 0 auto;
      }
    }
  }
`;
const particlesContainer = css`
  height: 500px;
  width: 1100px;
  background: transparent;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: visible;
`;

const Theme = () => {
  const config = useConfig()
  const slider = useRef(null);

  return (
    <ThemeProvider theme={config}>
      <Layout> 
        <div css={titleContainer}>
          <Image imageName="logoLg"/>
          <h1 css={title}>
            Apache Superset (Incubating)
          </h1>
          <h2>
            Apache Superset (incubating) is a modern data <br/> 
            exploration and visualization platform.
          </h2>
          <Link to="/src-pages-docs-installation-index">
            <Button type="primary" size="large">
              Get Started
            </Button>
          </Link>
        </div>

        <div css={featureSectionStyle}>
          <h2 css={secondaryHeading}>   
            Overview
          </h2>
          <h4 className='heading'> Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple pie charts to highly detailed deck.gl geospatial charts. </h4>   
          <ul className='featureList ant-row'>
              <Col span={12}>
                <li className='feature'>
                    <span className="imagePlaceHolder"> <PieChartOutlined /> </span>
                    <span className='featureText'><b>
                      Powerful and easy to use </b><br/>
                      Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE.  
                    </span>
                </li>


                <li className='feature'>
                  <span className="imagePlaceHolder"> <BoxPlotOutlined /> </span>
                  <span className='featureText'>
                    <b> Integrates with modern data sources </b>
                    <br/> Superset can connect to any SQL based datasource through SQL Alchemy, including modern cloud native data sources and engines at petabyte scale.
                  </span>
                </li>
              </Col>

              <Col span={12}>
                <li className='feature'>
                    <span className="imagePlaceHolder"> <BarChartOutlined /> </span>
                    <span className='featureText'>
                      <b> Modern architecture </b><br/>
                      Superset is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer.
                    </span>
                </li>
                <li className='feature'>
                    <span className="imagePlaceHolder"> <DotChartOutlined /> </span>
                    <span className='featureText'>
                    <b> Rich visualizations and dashboards </b> <br/>
                    Superset ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Superset.  
                    </span>
                </li>
              </Col>
          </ul>
        </div>

        <div css={linkCarousel}>
          <h2 css={secondaryHeading}>Explore</h2>
          <div className="toggleContainer">
            <div className="toggleBtns">
                <div className="toggle" onClick={()=>slider.current.goTo(0)}>
                  <h3>Explore</h3>
                  <span> 
                    Explore your data using the array of data visualizations. 
                  </span>
                </div>

                <div className="toggle" onClick={()=>slider.current.goTo(1)}>
                  <h2>View</h2>
                  <span>
                    View your data through interactive dashboards
                  </span>
                </div>
                <div className="toggle" onClick={()=>slider.current.goTo(2)}>
                  <h3>Investigate</h3>
                  <span>
                    Use sqlab to write queries to explore your data
                  </span>
                </div>
            </div>
            <Carousel ref={slider} effect="scrollx">
              <div className="imageContainer">
                <img src="/images/pie-chart.png" />
              </div>
              <div className="imageContainer">
                <img src="/images/google-analytics.png" />
              </div>
              <div className="imageContainer">
                <img src="/images/sqllab.png" />
              </div>
            </Carousel>
          </div>
        </div>
        <div css={integrationSection}>
          <h2 css={secondaryHeading}>   
            Supported Data Sources
          </h2> 
          
          <ul className="databaseList">
            {Databases.map(({title, href, imgName: imageName, width, height})=> ( 
              <a href={href} target="_blank">
                <Image {...{imageName, type: "db", width, height}} />
              </a>
            ))}
          </ul>
          <span className="databaseSub"> .. and any other SQLAlchemy <a href="https://superset.incubator.apache.org/installation.html#database-dependencies"> compatible data source. </a> </span>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

// @ts-ignore
export default theme()(Theme)
