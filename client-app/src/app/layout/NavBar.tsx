import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
interface Props {
    FormOpen: () => void;
}

export default function NavBar({ FormOpen }: Props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={FormOpen} positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}