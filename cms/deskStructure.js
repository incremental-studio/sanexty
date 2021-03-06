
import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Config")
        .child(
          S.editor()
            .id('config')
            .schemaType("config")
            .documentId("global-config")
        )
    ]);