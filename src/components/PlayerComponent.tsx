import clsx from "clsx";
import styles from "./PlayerComponent.module.css";

export enum PlayerStyle {
    Plain,
    SimpleColor,
    Color,
    Fancy,
    Tab,
    Verbose,
}

interface PlayerComponentProps {
    /** The player style to display */
    style: PlayerStyle;
    /** Whether to render the component from the view of the server operator */
    isOp?: boolean;
    /** The username of the player */
    username?: string;
    /** The alternative nickname of the player (shown only if isOp is true) */
    nickname?: string;
    /** The flair to display */
    flair?: JSX.Element;
    /** The team color of the player */
    teamColor?: string;
}

declare module "csstype" {
    interface Properties {
        "--team-color"?: string;
    }
}

export default function PlayerComponent({ 
    style,
    isOp = false,
    username = "username",
    nickname = "nickname",
    flair = <span className={styles.PlayerComponent__rank}>*</span>,
    teamColor = "var(--ifm-color-info-darkest)",
}: PlayerComponentProps = {
    style: PlayerStyle.Color,
}) {
    return (<div className={clsx(
        styles.PlayerComponent,
        style >= PlayerStyle.SimpleColor && styles["PlayerComponent--team-color"]
    )} style={{
        "--team-color": teamColor,
    }}>
        {style >= PlayerStyle.Fancy && flair}
        <span
            style={{
                textDecorationLine: isOp && style >= PlayerStyle.Fancy && nickname ? "line-through" : undefined,
                fontWeight: style === PlayerStyle.Tab ? "bold" : undefined,
            }}
            title={style >= PlayerStyle.Color && style !== PlayerStyle.Tab ? `Teleport to ${username}` : ""}>
            {username}
        </span>
        {isOp && style === PlayerStyle.Verbose && nickname && <>&nbsp;<span style={{ fontStyle: "italic" }}>{nickname}</span></>}
    </div>);
}
