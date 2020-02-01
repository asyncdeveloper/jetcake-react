import React from "react";
import { Button } from "shards-react";

const SpinnerButton = () => (
    <div className="loader center">
        <Button outline disabled pill theme="info" style={{float: 'right'}}>
            <i className="fa fa-spinner fa-spin" />
        </Button>
    </div>
);

export default SpinnerButton;