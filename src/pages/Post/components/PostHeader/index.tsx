import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { defaultTheme } from "@/styles/theme/default";

import {
  ProfileContainer,
  ProfileDetail,
} from "@/pages/Post/components/PostHeader/styles";
import { Link } from "react-router-dom";

export function PostHeader() {
  return (
    <ProfileContainer>
      <ProfileDetail>
        <div className="header">
          <Link to="/" className="backLink">
            <FontAwesomeIcon icon={faAngleLeft} />
            Voltar
          </Link>

          <div className="link">
            <a href="https://github.com/GiovannyFialho" target="_blank">
              Ver no GitHub
            </a>

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xs"
              color={defaultTheme.blue}
            />
          </div>
        </div>

        <p className="title">JavaScript data types and data structures</p>

        <div className="info-items">
          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>GiovannyFialho</span>
          </div>

          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faCalendarDay}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>Há 1 dia</span>
          </div>

          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faComment}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>5 comentários</span>
          </div>
        </div>
      </ProfileDetail>
    </ProfileContainer>
  );
}
