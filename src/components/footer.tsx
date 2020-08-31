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
    float: right;
    margin-top: 25px;
    a {
      color: white;
      margin: 5px;
    }
  }
  .disclaimer {
    margin-top: 8px;
  }
`;

const iconContainerStyle = css`
  background-color: #323232; 
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  .icons {
    float: right;
    width: 50%;
    svg {
      margin-top: 8px;
      color: #ccc;
      width: 40px;
      height: 40px;
      margin-left: 10px; 
    }
    .svg {
      width: 50px;
      height: 50px;
      margin-top: -28px;
    }
  }
  .communityBtn {
    width: 50%;
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
              Thanks &nbsp;| 
            </a>
            <a 
              href="https://www.apache.org/licenses/"
              target="_blank" 
            >
              License
            </a>
          </div> 
        </div>
      </div>
      © The Apache Software Foundation {new Date().getFullYear()} <br /> 
      Apache Superset, Superset, Apache, the Apache feather logo, 
      and the Apache Superset project logo are either registered trademarks <br />
      or trademarks of 
      <a 
        href="http://www.apache.org/"
        target="_blank"
      >
        &nbsp;The Apache Software Fountation
      </a>
      &nbsp;in the United States and other countries.
      <div className="disclaimer">
        Disclaimer: Apache Superset is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. 
        Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, 
        and decision making process have stabilized in a manner consistent with other successful ASF projects. 
        While incubation status is not necessarily a reflection of the completeness or stability of the code,
        it does indicate that the project has yet to be fully endorsed by the ASF.  
      </div>
      
    </Footer>
  </>
);

export default LayoutFooter;
