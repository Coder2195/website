import { GraphQLClient, gql } from "graphql-request";
import type { GetProjectsQuery, GetSkillsQuery } from "./generated";

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
      name
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
      name
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

export const GET_SKILLS = gql`
  query GetSkills {
    skills {
      projects {
        slug
        name
      }
      type
      name
      link
    }
  }
`;

export const GET_EXPERIENCE = gql`
  query GetExperience {
    workExperiences(orderBy:startDate_DESC) {
      name
      startDate
      endDate
      description {
        html
      }
      location
      locationUrl
      position
    }
  }
`;

export type GetProjectsTag = GetProjectsQuery["projectTags"][number];
export type GetSkillsSkill = GetSkillsQuery["skills"][number];
export type ProjectPreview = GetProjectsQuery["projects"][number];
