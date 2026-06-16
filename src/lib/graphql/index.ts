import { GraphQLClient, gql } from "graphql-request";
import type { GetProjectsQuery } from "./generated";

export const hygraph = new GraphQLClient(
	"https://us-east-1.cdn.hygraph.com/content/cl8hzzoiu59rq01tccufrg18c/master",
);

export const GET_PROJECTS = gql`
  query GetProjects {
    projectTags {
      id
      name
      style
    }
    projects {
      id
      title
      date
      excerpt
      tags {
        id
      }
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
      skills {
        name
        type
        link 
      }
      links {
        name
        url
        type
      }
      slug
    }
  }

`;

export type GetProjectsTag = GetProjectsQuery["projectTags"][number];

export type ProjectPreview = GetProjectsQuery["projects"][number];
