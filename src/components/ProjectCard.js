import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tabAttrs }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        className="button-connect1"
        href={tabAttrs}
        target="_blank"
        rel="noreferrer"
      >
        <div className="proj-imgbx ">
          <img src={imgUrl} alt="pre" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="button-connect">
              {/* <a href={tabAttrs} target="_blank" rel="noreferrer"> */}
              <button>
                <span>DEMO</span>
              </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
