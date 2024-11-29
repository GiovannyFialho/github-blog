import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { defaultTheme } from "@/styles/theme/default";

import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDetail,
} from "@/pages/Blog/components/Profile/styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/GiovannyFialho.png" alt="" />

      <ProfileDetail>
        <div className="container_title">
          <h2>Giovanny Fialho</h2>

          <div className="link">
            <a href="https://github.com/GiovannyFialho" target="_blank">
              GitHub
            </a>

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xs"
              color={defaultTheme.blue}
            />
          </div>
        </div>

        <p className="description">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

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
              icon={faBuilding}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>Rocketseat</span>
          </div>

          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faUserGroup}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>32 seguidores</span>
          </div>
        </div>
      </ProfileDetail>
    </ProfileContainer>
  );
}
