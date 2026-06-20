# License Server

Backend licensing service for the Load Test Monitor desktop application.

The service manages license activation requests, approval status, and machine-bound license validation for deployed Electron applications.

## Purpose

This project supports the licensing workflow of the Load Test Monitor application by allowing organizations to activate a license against a specific machine.

## Core Features

* License-key creation and management
* Organization-based activation requests
* Machine ID binding
* License approval and rejection workflow
* License validation for the Electron desktop application
* REST API endpoints for activation and verification

## Tech Stack

* Node.js
* Express.js
* MongoDB / MongoDB Atlas
* REST API

## Workflow

1. A user enters their license key and organization details in the desktop application.
2. The application sends an activation request to this service.
3. The request is reviewed and approved by an administrator.
4. The approved license is linked to the target machine.
5. The desktop application validates the license before enabling access.

## Security Notes

* Environment variables and secrets are excluded from the repository.
* Production credentials, database URLs, and private license data are not committed.
* This repository contains the backend service only; the related desktop application is maintained separately.

## Related Project

* Load Test Monitor desktop application
