import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div class="projectContainer">
      <div class="deck">
        <div class="card hovercard">
          <div class="front face">
            <h2>HelloHiker</h2>
            <div class="bottext">
              <h3>6000kr</h3>
            </div>
          </div>
          <div class="back face">
            <h2>Basic</h2>
            <ul>
              <li>6 Sider</li>
              <li>Kontaktside</li>
              <li>SEO optimeret</li>
              <li>Mobilvenlig</li>
            </ul>
            <div class="botprice">
              <h3>6000kr</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="deck">
    <div class="card hovercard">
      <div class="front face">
        <h2>Party Planner</h2>
        <div class="bottext">
          <h3>6000kr</h3>
        </div>
      </div>
      <div class="back face">
        <h2>Basic</h2>
        <ul>
          <li>6 Sider</li>
          <li>Kontaktside</li>
          <li>SEO optimeret</li>
          <li>Mobilvenlig</li>
        </ul>
        <div class="botprice">
          <h3>6000kr</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="deck">
    <div class="card hovercard">
      <div class="front face">
        <h2>E-Commerce Backend</h2>
        <div class="bottext">
          <h3>6000kr</h3>
        </div>
      </div>
      <div class="back face">
        <h2>Basic</h2>
        <ul>
          <li>6 Sider</li>
          <li>Kontaktside</li>
          <li>SEO optimeret</li>
          <li>Mobilvenlig</li>
        </ul>
        <div class="botprice">
          <h3>6000kr</h3>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Projects;
