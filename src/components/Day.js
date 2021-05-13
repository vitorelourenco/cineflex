import styled from "styled-components";
import { Link } from "react-router-dom";
import NextButton from "./NextButton";

export default function Day({ day }) {
  const { weekday, date, showtimes } = day;
  return (
    <SessionWrapper>
      <SessionHeader>
        {weekday} - {date}
      </SessionHeader>
      <SessionUL>
        {showtimes.map(({ name, id }) => (
          <TimeLI key={id} id={id} name={name} />
        ))}
      </SessionUL>
    </SessionWrapper>
  );
}

const SessionWrapper = styled.article`
  margin-bottom: 40px;
`;

const SessionHeader = styled.header`
  font-size: min(6vw, 19px);
  margin-bottom: 15px;
`;

const SessionUL = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SessionLI = styled.li`
  width: 20%;
  max-width: 140px;
  min-width: 60px;
`;

function TimeLI({ name, id }) {
  return (
    <SessionLI>
      <Link className="d-block w-100" to={`/assentos/${id}`}>
        <NextButton>{name}</NextButton>
      </Link>
    </SessionLI>
  );
}
