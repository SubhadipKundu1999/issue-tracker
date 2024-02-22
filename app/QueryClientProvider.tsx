"use client"

import {
    QueryClient,
    QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'


// Create a client
const queryClient = new QueryClient()

function QueryClientProvider({children}:PropsWithChildren ) {
    return (
        // Provide the client to your App
        <ReactQueryClientProvider client= { queryClient } >
       {children}
        </ReactQueryClientProvider>
    )
}
