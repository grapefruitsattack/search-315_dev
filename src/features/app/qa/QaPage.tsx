'use client'
import Link from "next/link";
import CommonPage from "../../../components/CommonPage";

export default function QaPage({ }: { }) {


    return (
        <CommonPage>
        <article className="pt-32 pb-48 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">
        <section className="pb-20">
        <h1 className="text-3xl pb-12 font-bold font-sans">Q&A</h1>
        <h2 className="text-2xl pb-2 font-bold">ここってどんなサイト？</h2>
        <p className=" pb-8">
            当サイトは「アイドルマスターSideM」の楽曲情報を中心に情報をまとめているサイトです。<br/>
            運営は個人によってなされており、「アイドルマスターSideM」公式とは一切関係ございません。<br/>
            詳細は
            <Link className="underline" href={`/about`} rel="noopener noreferrer">
                アバウトページ
            </Link>
            に記載しています。ご利用にあたってはこちらもご確認いただけますと幸いです。
            
        </p>
        <h2 className="text-2xl pb-2 font-bold">リンクされてる動画って無断転載じゃないの？</h2>
        <p className=" pb-8">
            公式から配信されている動画です。<br/>
            音楽サブスク配信サービス「Youtube Music」で配信されている楽曲は。「YouTube」でも視聴が可能なため、そちらをリンクしています。リンクの作成には細心の注意を払っていますが、万が一非公式の動画へのリンクがなされている場合はお問い合わせフォーム等から運営者へご連絡いただけますと幸いです。
        </p>
        <h2 className="text-2xl pb-2 font-bold">このサイトのスクショをSNSや自分のサイトに載せても大丈夫？</h2>
        <p className=" pb-8">
            <span className="text-red-700">「他SNSのロゴが表示されている画面（シェア画面）以外」</span>でしたら自由に掲載いただいて構いません。<br/>
            切り取り、書き込みなどの加工も問題ございませんが、サイトの全部または一部を素材として使用するような形はご遠慮ください。<br/>
            （「他SNSのロゴが表示されている画面（シェア画面）以外」の条件のみ注意いただければ、個人的利用は基本的に問題ございません。不明な点がありましたらお問い合わせ下さい）<br/>
        </p>
        <h2 className="text-2xl pb-2 font-bold">不完全なコンテンツはいつ完成する？/こんな機能が欲しい</h2>
        <p className=" pb-8">
            個人による運営開発のため時期は未定ですが、今後も新機能の追加を予定しています！<br/>
            ・ライブ情報の完全化（プロミや外部ライブなど）<br/>
            ・曲検索の条件にライブ披露済・未披露を追加<br/>
            ・CD収録のボイスドラマの検索<br/>
            などを現在検討しています。<br/>
            そのほか、こんな機能が欲しい！などありましたら、ぜひお問い合わせからご連絡ください。
        </p>
        <h2 className="text-2xl pb-2 font-bold">今後の新曲やサブスクは反映される？/更新頻度はどのくらいを予定している？</h2>
        <p className=" pb-8">
            新曲やサブスク追加の反映は今後も予定しています。<br/>
            ただし、迅速な対応は難しい場合もございます。予めご了承下さい。
        </p>
        <h2 className="text-2xl pb-2 font-bold">舞台版（サイステ）の楽曲の掲載予定はある？</h2>
        <p className=" pb-8">
            申し訳ありませんが、舞台版（サイステ）の楽曲の対応予定はございません。<br/>
            今後、舞台版の展開について大きく状況が変わることがない限り、このような判断とさせていただきます。<br/>
            もし舞台版（サイステ）の楽曲対応についてのお問い合わせやご要望をいただいても、お応えすることはできません。ご了承ください。
        </p>
        <h2 className="text-2xl pb-2 font-bold">このサイトについてのお知らせはどこで見れる？</h2>
        <p className=" pb-8">
            以下のSNSをご確認ください。<br/>
            ＠～
        </p>
        <h2 className="text-2xl pb-2 font-bold">連絡を取りたい（情報の間違いを見つけた、要望を送りたい）</h2>
        <p className=" pb-2">
            <a className="underline" 
                href={`https://docs.google.com/forms/d/e/1FAIpQLSdYMzA85KFDx2Qr_sigjKBAPAqlRoZB4KA8tkHbuchZQuL_9w/viewform?usp=sf_link`}
                target="_blank" rel="noopener noreferrer">
                お問い合わせフォーム
                <span className="">
                <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                </span>
            </a>
            または以下のメールアドレス宛に直接ご連絡ください。
        </p>
        <p className=" pb-2">
            メールアドレス：2000chome@gmail.com
        </p>
        </section>
        </article>
        </CommonPage>
      );
  }