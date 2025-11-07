"use client";
import {
  Flex,
  Box,
  Text,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react";

import Link from "next/link";
import { useAuth } from "../context/isLoggedIn";

export default function Navbar() {
  const { isLoggedIn, userProfile, logout } = useAuth();

  return (
  
  );
}










   {isLoggedIn && profile ? (
          <>
          
          </>
        ) : (
          // Nếu chưa đăng nhập
          <Box display="flex" gap={2}>
            <Button
              color="inherit"
              component={Link}
              href="/login"
              variant="outlined"
            >
              Đăng nhập
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/register"
            >
              Đăng ký
            </Button>
          </Box>
        )}
