import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { 
  GithubOutlined,
  SlackSquareOutlined
} from '@ant-design/icons'; 

const { Footer } = Layout;

const footerStyle = css`
  background-color: #323232; 
  color: #ccc;
  .apacheLinks {
    a {
      color: white;
      margin: 5px;
    }
  }
`;

const iconContainerStyle = css`
  height: 100px;
  background-color: #323232; 
  display: flex;
  flex-direction: row;
  .icons {
    float: right;
    width: 50%;
    svg {
      margin-top: 15px;
      color: #ccc;
      width: 60px;
      height: 60px;
      margin-left: 10px; 
    }
    .svg {
      width: 60px;
      height: 60px;
      margin-top: -35px;
    }
  }
  .communityBtn {
    width: 50%;
    .joinCommunity {
      float: right;
      display: flex;
      flex-direction: row;
      Button {
        margin-top: 31px;
        margin-right: 20px;
        float: right;
      }
      #head {
        margin-top: 38px;
        margin-right: 15px;
        font-size: 17px;
        font-weight: 500;
        color: white;
        display: block;
      }
    }
  }
`;

const LayoutFooter = () => (
  <>
    
    <Footer css={footerStyle}>
      <div css={iconContainerStyle} >
        <div className="icons">
          <a href="https://apache-superset.slack.com/join/shared_invite/zt-g8lpruog-HeqpgYrwdfrD5OYhlU7hPQ#/" target="_blank">
          <SlackSquareOutlined className="icon"/>
          </a>
          <a href="https://github.com/apache/incubator-superset" target="_blank">
          <GithubOutlined className="icon" />
          </a>
          <a href="https://stackoverflow.com/questions/tagged/apache-superset+superset" target="_blank">
          <img src="/images/so-icon.svg" className="icon svg"/>
          </a>
        </div>
        <div className="communityBtn">
          <div className="joinCommunity">
            <span id="head"> Want to be part of Apache Superset?</span>
            <Link to="/community">
              <Button type="primary" size="large">
                Join the Community!
              </Button>
            </Link>
          </div>
        </div>
      </div>
      © Copyright {new Date().getFullYear()}, 
      <a 
        href="http://www.apache.org/"
        target="_blank"
      >
        &nbsp;The Apache Software Fountation
      </a>
       , &nbsp;Licensed under the Apache 
      <a 
        href="https://www.apache.org/licenses/"
        target="_blank" 
      >
        &nbsp;License.
      </a> <br/>

      <div>
        Disclaimer: Apache Superset is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. 
        Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, 
        and decision making process have stabilized in a manner consistent with other successful ASF projects. 
        While incubation status is not necessarily a reflection of the completeness or stability of the code,
        it does indicate that the project has yet to be fully endorsed by the ASF.  
      </div>
      <div className="apacheLinks">
        <a 
          href="https://www.apache.org/security/" 
          target="_blank"
        >
          Security &nbsp;|
        </a>
        <a 
          href="https://www.apache.org/foundation/sponsorship.html" 
          target="_blank"
        >
          Donate &nbsp;|
        </a>

        <a 
          href="https://www.apache.org/foundation/thanks.html" 
          target="_blank"
        >
          Thanks 
        </a>
      </div>
    </Footer>
  </>
);

export default LayoutFooter;
