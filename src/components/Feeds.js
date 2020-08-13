import React from 'react';
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/core";
import PageHeader from './PageHeader';
import GroupTitle from './GroupTitle';
import Filters from './Filters';
import Repo from './Repo';

function Feeds() {
    return (
        <Box maxWidth="1200px" mx="auto">
            <PageHeader/>
            <Flex alignContent="center" justifyContent="space-between" mb="25px">
                <GroupTitle />
                <Filters />
            </Flex>

            <SimpleGrid columns={3} justifyContent="center" spacing="15px">
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
            </SimpleGrid>

            <Flex my="20px" alignItems="center" justifyContent="center">
                <Button variantColor="blue">Load More</Button>
            </Flex>
        </Box>
    )
}

export default Feeds
