import Head from "next/head";

type SeoProps = {
    titleName: string;
};

export default function Seo({ titleName }: SeoProps) {
    return (
        <Head>
            <title>{titleName}</title>
        </Head>
    );
}
