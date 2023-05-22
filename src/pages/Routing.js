import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Detail from './Detail'
import UnAuthorized from './UnAuthorized'

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Detail" element={<Detail></Detail>} />
                <Route path="/UnAuthorized" element={<UnAuthorized></UnAuthorized>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
