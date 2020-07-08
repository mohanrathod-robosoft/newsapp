import React from "react";

import NewsCard from "../../molecule/Cards/NewsCard";
import NewestCard from "../../molecule/Cards/NewestCard";
import AskCard from "../../molecule/Cards/AskCard";
import ShowCard from "../../molecule/Cards/ShowCard";
import JobsCard from "../../molecule/Cards/JobsCard";

export class CardsFactory {
    public subUrl: string;
    public key: number;
    public index: number;
    public type: string;
  
    constructor(index: number, key: number, subUrl: string, type: string ) {
        this.subUrl = subUrl;
        this.key = key;
        this.index = index;
        this.type = type;
    }
  
    renderData = () => {
        if(this.type === "news"){
            return (
            <NewsCard
                index={this.index}
                key={this.key}
                subUrl={this.subUrl}
            />
            );
        }
        if (this.type === "newest") {
            return (
            <NewestCard
                index={this.index}
                key={this.key}
                subUrl={this.subUrl}
            />
            );
        }
        if (this.type === "ask") {
            return (
            <AskCard
                index={this.index}
                key={this.key}
                subUrl={this.subUrl}
            />
            );
        }
        if (this.type === "show") {
            return (
            <ShowCard
                index={this.index}
                key={this.key}
                subUrl={this.subUrl}
            />
            );
        }
        if (this.type === "jobs") {
            return (
            <JobsCard
                index={this.index}
                key={this.key}
                subUrl={this.subUrl}
            />
            );
        }
        
        
    }
}
  
export function createCard(index: number, key:number, subUrl: string, type: string) {
    return new CardsFactory(index, key, subUrl, type);
}