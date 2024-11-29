import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

import { defaultTheme } from "@/styles/theme/default";

import { GitHubContext } from "@/context/GitHubContext";

import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDetail,
} from "@/pages/Blog/components/Profile/styles";

export function Profile() {
  const { user } = useContext(GitHubContext);

  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/GiovannyFialho.png" alt="" />

      <ProfileDetail>
        <div className="container_title">
          <h2>{user?.name}</h2>

          <div className="link">
            <a href={user?.html_url} target="_blank">
              GitHub
            </a>

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xs"
              color={defaultTheme.blue}
            />
          </div>
        </div>

        <p className="description">{user?.bio}</p>

        <div className="info-items">
          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>{user?.login}</span>
          </div>

          {user?.company && (
            <div className="info-items-item">
              <FontAwesomeIcon
                icon={faBuilding}
                size="1x"
                color={defaultTheme["base-label"]}
              />

              <span>{user.company}</span>
            </div>
          )}

          {user?.followers && (
            <div className="info-items-item">
              <FontAwesomeIcon
                icon={faUserGroup}
                size="1x"
                color={defaultTheme["base-label"]}
              />

              <span>{user?.followers} seguidores</span>
            </div>
          )}
        </div>
      </ProfileDetail>
    </ProfileContainer>
  );
}
