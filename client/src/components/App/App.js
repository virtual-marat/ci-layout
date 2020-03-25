import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page theme theme_color_project-default theme_font_ys-text theme_size_default theme_space_default theme_gap_small">
        <div className="header decorator header_space-v_l decorator_space-h_m">
          <div className="header__content">
            <h1 className="header__title text text_size_xxxl text_view_primary text_line-height_xl">
              philip1967/my-awesome-repo
            </h1>
            <div className="header__buttons">
              <button className="button button_size_xl button_view_control button_form_round decorator_indent-r_xs">
                <div className="icon button__icon icon_type_play icon_size_s icon_view_brand"></div>
                <span className="button__text">Run build</span>
              </button>
              <button className="button button_size_l button_view_control button_form_round">
                <div className="icon button__icon icon_type_gear icon_size_s icon_view_brand"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="layout layout_vertical_align_top decorator decorator_space-h_m">
          <div className="layout__container layout__container_size_m layout__container_align_center">
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_success icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_success text_line-height_xs text_size_xxl">
                      #1368
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      add documentation for postgres scaler
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        9c9f0b9
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_alert icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_alert text_line-height_xs text_size_xxl">
                      #1367
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      Super cool UI kit for making websites that look like games
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        super-cool-ui-kit
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        952e5567
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Vadim Makeev
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_success icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_success text_line-height_xs text_size_xxl">
                      #1366
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      Merge branch 'master' of github.com:jaywcjlove/awesome
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        b4636ab
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_warning icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_warning text_line-height_xs text_size_xxl">
                      #1366
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      Merge branch 'master' of github.com:jaywcjlove/awesome
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        b4636ab
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_success icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_success text_line-height_xs text_size_xxl">
                      #1364
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      add documentation for postgres scaler
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        b4636ab
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_alert icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_alert text_line-height_xs text_size_xxl">
                      #1367
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      replace all `div` to `article`
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        super-cool-ui-kit
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        952e5567
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Vadim Makeev
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_success icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_success text_line-height_xs text_size_xxl">
                      #1362
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      improved accessibility
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        e41e4cc
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_success icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_success text_line-height_xs text_size_xxl">
                      #1350
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      fix: upload 别片类型
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        e41e4cc
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="build-history decorator_indent-t_xs decorator_indent-b_xs">
              <div className="build-history__description">
                <div className="build-history__status">
                  <div className="icon icon_type_success icon_size_m icon_view_brand"></div>
                </div>
                <div className="build-history__info">
                  <div className="build-history__title">
                    <div className="build-history__id text text_size_xs text_view_success text_line-height_xs text_size_xxl">
                      #1349
                    </div>
                    <div className="build-history_msg text text_size_l text_line-height_xs">
                      Form item has default height align with form size
                    </div>
                  </div>
                  <div className="commit">
                    <div className="commit__info">
                      <div className="icon icon_type_commit decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs decorator_indent-r_xxs">
                        master
                      </span>
                      <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                        e41e4cc
                      </span>
                    </div>
                    <div className="commit__author">
                      <div className="icon icon_type_user decorator_indent-r_xxs"></div>
                      <span className="text text_size_m text_line-height_xxxs">
                        Philip Kirkorov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-history__data">
                <div className="time-info">
                  <div className="time-info__date-time">
                    <div className="icon icon_type_calendar"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      21 янв, 03:06
                    </span>
                  </div>
                  <div className="time-info__duration-time">
                    <div className="icon icon_type_stopwatch"></div>
                    <span className="text text_size_m text_line-height_xxxs text_view_secondary2">
                      1 ч 20 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="build-history-button">
              <div className="button button button_size_xl button_view_control button_form_round">
                Show more
              </div>
            </div>
          </div>
        </div>
        <div className="footer decorator decorator_space-h_m">
          <div className="footer__content">
            <div className="list decorator decorator_indent-t_xs">
              <a
                href=""
                className="list__item link link_theme_normal text text_line-height_xxxs text_size_m decorator decorator_indent-r_xs "
              >
                Support
              </a>
              <a
                href=""
                className="list__item link link_theme_normal text text_line-height_xxxs text_size_m"
              >
                Learning
              </a>
            </div>
            <div className="footer__content_copyright text text_line-height_xxs text_size_m text_view_secondary">
              © 2020 Your Name
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
