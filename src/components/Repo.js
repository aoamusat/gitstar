import React, { Component } from 'react';
import { Box, Flex, Image, Text, Heading, Link, Stack, Button } from '@chakra-ui/core';
import { GoIssueOpened, GoStar, GoRepoForked, GoCode } from "react-icons/all";

class Repo extends Component {

    constructor(props) {
        super(props)

        this.state = {
             isListView: false
        }
    }


    render() {
        return (
            <Box borderWidth={1} bg="white" p={4}  rounded="5px">
                <Flex mb="15px">
                    <Image src="/git_logo.png" w="35px" h="35px" alt="AltText" rounded="8px"/>
                    <Box ml="10px">
                        <Heading fontSize="16px" color="gray.500">aoamusat</Heading>
                        <Text fontSize="13px" color="gray.500">View profile</Text>
                    </Box>
                </Flex>
                    <Box>
                        <Box mt={8}>
                            <Heading color="blue.500" fontSize="19px" as="a" href="https://github.com" target="_blank" rel="nofollow noopener">Repo Name</Heading>
                            <Text fontSize="14px" color="gray.600">Built by: <Link href="https://github.com">username</Link>. July 19, 2020</Text>
                        </Box>
                        <Text mt="10px" fontSize="14px" color="gray.600">
                            A brand new way to write responsive CSS.
                            Named breakpoints, DRY selectors, no scripts,
                            no builds, vanilla CSS.
                        </Text>
                    </Box>
                <Stack isInline>
                    <Button as="a" leftIcon={GoStar} bg="white" href="/" fontSize="14px" _hover={{textDecoration: 'none', backgroundColor: '#fff'}}>Star</Button>
                    <Button as="a" leftIcon={GoIssueOpened} bg="white" fontSize="14px" href="/" _hover={{textDecoration: 'none', backgroundColor: '#fff'}}>Issues</Button>
                    <Button as="a" leftIcon={GoRepoForked} bg="white" fontSize="14px" href="/" _hover={{textDecoration: 'none', backgroundColor: '#fff'}}>Forks</Button>
                    <Button as="a" leftIcon={GoCode} bg="white" fontSize="14px" href="/" _hover={{textDecoration: 'none', backgroundColor: '#fff'}}>Language</Button>
                </Stack>
            </Box>
        )
    }
}

export default Repo
