<template>
    <i-article>
        <article>
            <h1>贡献主题模板</h1>
            <p>本文介绍如何Contribute A Layout Template</p>
            <inAnchor
                title="Contribute A Layout Template"
                h2
            />
            <p>Contribute A Layout Template</p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        inAnchor
    },
    data() {
        return {
            code: Code
        };
    }
};
</script>

<style lang="less" scoped>
.img-list {
    margin: 20px auto;
    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        li {
            margin: 0 50px;
            text-align: center;
            img {
                margin: 0 auto;
                display: block;
                width: 100%;
            }
            span {
                display: inline-block;
                line-height: 30px;
                font-size: 12px;
            }
        }
    }
}
</style>>
