module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-idiomatic-order",
        "stylelint-config-prettier"
    ],
    plugins: [
        "stylelint-scss",
        "stylelint-order",
        "stylelint-declaration-block-no-ignored-properties"
    ],
    customSyntax: "postcss-scss",
    rules: {
        "plugin/declaration-block-no-ignored-properties": true,
        "declaration-empty-line-before": [
            "always", {
                ignore: ["after-comment", "after-declaration", "inside-single-line-block"]
            }
        ]
    },
    ignoreFiles: [
        "coverage/**/*.css",
        "dist/*.css"
    ]
}
