import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "gatsby-plugin-sanity-image";

export default function Testimonials() {
   const {
     allSanityTestimonial: { nodes },
   } = useStaticQuery(graphql`
     query {
       allSanityTestimonial {
         nodes {
           testimonials {
             title
             text
             isActive
             author
             _key
             avatar {
               ...ImageWithPreview
             }
           }
         }
       }
     }
   `);

  const Testimonials = nodes.map(node => {
     return node.testimonials.map(testimonial => {
       if (!testimonial.isActive) {
         return false;
      }

      return (
        <SimpleGrid
          templateColumns="100px 1fr"
          gap="2rem"
          justifySelf="center"
          maxWidth="500px"
          alignItems="center"
          key={testimonial._key}
        >
          <Box>
            <Image
              {...testimonial.avatar}
              alt={testimonial.author}
              width={300}
            />
          </Box>
          <Box>
            <Heading
              as="h4"
              size="md"
              mb="1rem"
            >
              {testimonial.title}
            </Heading>
            <Text mb=".66rem">{testimonial.text}</Text>
            <Text fontSize="sm">{testimonial.author}</Text>
          </Box>
        </SimpleGrid>
      );

     })
  })


  return (
    <Box background="gray.100" p="2rem">
      <Heading as="h2" align="center" mb="2rem" size="xl">
        Testimonials
      </Heading>
      <SimpleGrid
        templateColumns="repeat(3, 1fr)"
        gap="3rem">
        {Testimonials}
      </SimpleGrid>
    </Box>
  );
}
