import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddPaper from "../pages/AddPaper"
import LoginPage from "../pages/LoginPage"
import Mypage from "../pages/Mypage"
import Paper from "../pages/Paper"
import AddComment from "../pages/AddComment";
import { AnimatePresence } from "framer-motion";

const Router = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="addpaper" element={<AddPaper />} />
                    <Route path="loginpage" element={<LoginPage />} />
                    <Route path="mypage" element={<Mypage />} />
                    <Route path="paper" element={<Paper />} />
                    <Route path="addcomment" element={<AddComment />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default Router;