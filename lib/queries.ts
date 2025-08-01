import { gql } from '@apollo/client';

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    layanan(first: 5) {
      nodes {
        id
        title
        acfLayananFields {
          deskripsi
          ikon {
            sourceUrl
          }
          slugLink
        }
      }
    }
    testimoni(first: 3) {
      nodes {
        id
        title
        acfTestimoniFields {
          namaClient
          testimoni
          fotoClient {
            sourceUrl
          }
          jabatan
        }
      }
    }
  }
`;
