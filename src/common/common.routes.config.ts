import express from 'express';
export abstract class CommonRoutesConfig {
    protected app: express.Application;
    protected name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    public getName(): string {
        return this.name;
    }

    public getApp(): express.Application {
        return this.app;
    }

    abstract configureRoutes(): express.Application;
}