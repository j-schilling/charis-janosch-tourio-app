import styled from "styled-components";
import Card from "../components/Card.js";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "../components/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
  margin: 15px;

`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;
const FixedLink = styled(StyledLink)`
z-index: 100;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 50px;
  width:60px;
  height:60px;
  padding:1px;
  text-align:center;
  margin:auto;

  border-radius: 500px;
  box-shadow: 2px 2px 15px 0.5px RGB(177, 156, 217);

`;
export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <List role="list">
        {data.map((place) => {
          return (
            <ListItem key={place.id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={`${place._id.$oid ?? place._id}`}
              />
            </ListItem>
          );
        })}
      </List>
      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+</FixedLink>
      </Link>
    </>
  );
}
