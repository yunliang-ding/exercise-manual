'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async saveorupdateAction() {
    try {
      const topicEntity = this.post()
      let { id } = topicEntity
      if (id) { // update
        let affectedRows = await this.model('topic').where({ id }).update(topicEntity);
        this.json({
          code: 200,
          affectedRows
        })
      } else { // new
        let insertId = await this.model('topic').add(topicEntity)
        this.json({
          code: 200,
          insertId
        })
      }
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
  async listAction() {
    try {
      let where = {}
      if (this.get('type') !== '-1') {
        where.type = this.get('type')
      }
      if (this.get('level') !== '-1') {
        where.level = this.get('level')
      }
      let order = { id: 'desc' }
      if (this.get('order')) {
        order = JSON.parse(this.get('order'))
      }
      let data = await this.model('topic').where(where).page(this.get('current'), this.get('pageSize')).order(order).countSelect()
      this.json({
        code: 200,
        data
      })
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
  async getAction() {
    try {
      let data = await this.model('topic').where({ id: this.get('id') }).find()
      this.json({
        code: 200,
        data
      })
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
  async deleteAction() {
    try {
      let affectedRows = await this.model('topic').where({ id: this.post('id') }).delete()
      this.json({
        code: 200,
        affectedRows
      })
    } catch (error) {
      this.json({
        code: 500,
        error
      })
    }
  }
}