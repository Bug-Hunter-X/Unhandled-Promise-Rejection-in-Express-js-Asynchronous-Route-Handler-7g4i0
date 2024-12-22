# Unhandled Promise Rejection in Express.js Asynchronous Route Handler

This repository demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous route handlers.  Improper error handling can lead to server crashes or unexpected behavior, hindering application stability and making debugging difficult.  The `bug.js` file showcases the flawed code, while `bugSolution.js` provides the corrected implementation.

## Problem

The `bug.js` example uses an asynchronous function (`doSomethingAsync`) within a route handler.  However, it only handles the successful resolution of the promise; it fails to catch and handle potential rejections, resulting in unhandled promise rejections.  In production environments, this typically leads to crashes or cryptic error logs.

## Solution

`bugSolution.js` addresses this by properly handling both successful resolutions and rejections using a `.catch` block within the `.then` chain.  This ensures graceful error handling, preventing crashes and providing a more informative response to the client (though in a real-world application, a more user-friendly error response should be implemented).