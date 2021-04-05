import React from 'react';
import {HStack, Link, ListItem, UnorderedList} from '@chakra-ui/react';
import {Link as GatsbyLink} from 'gatsby';

const PaginationDots = () => (
  <ListItem><span>...</span></ListItem>
)

const PaginationNumber = ({index}) => (
  <ListItem>
    <Link
      _hover={{textDecoration: "none",}}
      color="green.600"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        left: '50%',
        transform: "translateX(-50%)",
        bottom: -2,
        display: "block",
        width: "calc(100% + 4px)",
        height: "3px",
        background: "transparent"
      }}
      _activeLink={{
        color: 'green.400',
        _before: {
          background: "green.400",
        },
      }}
      as={GatsbyLink}
      to={index > 0 ? `/blog/${index+1}` : '/blog'}
    >
      {index + 1}
    </Link>
  </ListItem>
);

const PaginationList = ({currentPage, totalPages}) => {
  let links = [];
  let paginationItems = [];

  console.log(totalPages);

  if ( currentPage >= 1 ) {
    links = [...links, currentPage];
  }

  if (currentPage >= 3) {
    links = [...links, currentPage - 1, currentPage - 2];
  }

  if ((currentPage + 2) <= totalPages) {
    links = [...links, currentPage + 2, currentPage + 1];
  }

  links.sort((a, b) => a - b);

  if (!links.includes(1)) {
    paginationItems = [...paginationItems, <PaginationNumber key={`page${0}`} index={0}/>];
    if (!links.includes(2)) {
      paginationItems = [...paginationItems, <PaginationDots key={`page${1}`}/>];
    }
  }

  links.forEach(link => {
    paginationItems = [...paginationItems, <PaginationNumber key={`page${link - 1}`} index={link - 1}/>]
  });

  if (!links.includes(totalPages)) {
    if (!links.includes(totalPages - 1)) {
      paginationItems = [...paginationItems, <PaginationDots key={`page${totalPages - 1}`}/>];
    }

    paginationItems = [...paginationItems, <PaginationNumber key={`page${totalPages}`} index={totalPages - 1}/>];
  }

  return paginationItems.map(kek => kek)
}

export default function Pagination({currentPage, pageSize, totalCount}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <HStack
      as={UnorderedList}
      styleType="none"
      fontFamily="Domine"
      justify="center"
      spacing={6}
      m={0}
      py="1rem"
      fontSize="1.25rem"
    >
      <PaginationList currentPage={currentPage} totalPages={totalPages}/>
    </HStack>
  )
}
