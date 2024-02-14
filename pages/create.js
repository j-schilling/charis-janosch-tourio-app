import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
  position:fixed;
  top:18px;
  z-index: 101;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  async function handleAddPlace(placeData) {
    console.log("placeDataon create", placeData);
    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(placeData),
    });
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>⬅</StyledBackLink>
      </Link>
      <h2 id="add-place">Add Place</h2>
      <Form onSubmit={handleAddPlace} formName={"add-place"} />
    </>
  );
}
