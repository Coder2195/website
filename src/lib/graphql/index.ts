import { GraphQLClient, gql } from "graphql-request";
import type { GetProjectsQuery } from "./generated";

export const hygraph = new GraphQLClient(
	"https://us-east-1.cdn.hygraph.com/content/cl8hzzoiu59rq01tccufrg18c/master",
);

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      date
      excerpt
      featured
      coverImage {
        url
      }
      slug
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      createdAt
      excerpt
      updatedAt
      description {
        html
      }
      embed
      coverImage {
        url
      }
      slug
    }
  }

`;

export const GET_PROJECT_METADATA = gql`
  query GetProjectMetadata($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      createdAt
      excerpt
      coverImage {
        url
      }
      embed
    }
  }
`;

export type ProjectPreview = GetProjectsQuery["projects"][number];
