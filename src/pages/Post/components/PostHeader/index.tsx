import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { GitHubContext } from "@/context/GitHubContext";

import { defaultTheme } from "@/styles/theme/default";

import {
  ProfileContainer,
  ProfileDetail,
} from "@/pages/Post/components/PostHeader/styles";

export function PostHeader() {
  const { issue } = useContext(GitHubContext);

  const correctDate = issue?.updated_at ? issue.updated_at : issue?.created_at;

  return (
    <ProfileContainer>
      <ProfileDetail>
        <div className="header">
          <Link to="/" className="backLink">
            <FontAwesomeIcon icon={faAngleLeft} />
            Voltar
          </Link>

          <div className="link">
            <a href={issue?.html_url} target="_blank">
              Ver no GitHub
            </a>

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xs"
              color={defaultTheme.blue}
            />
          </div>
        </div>

        <p className="title">{issue?.title}</p>

        <div className="info-items">
          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>GiovannyFialho</span>
          </div>

          {correctDate && (
            <div className="info-items-item">
              <FontAwesomeIcon
                icon={faCalendarDay}
                size="1x"
                color={defaultTheme["base-label"]}
              />

              <span>
                {formatDistanceToNow(new Date(correctDate), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
          )}

          <div className="info-items-item">
            <FontAwesomeIcon
              icon={faComment}
              size="1x"
              color={defaultTheme["base-label"]}
            />

            <span>{issue?.comments} comentários</span>
          </div>
        </div>
      </ProfileDetail>
    </ProfileContainer>
  );
}
