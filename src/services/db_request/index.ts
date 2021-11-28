import { delete_where } from './delete'
import { create } from './insert'
import { update } from './update'
import {
  select_all,
  select_all_column,
  select_all_in,
  select_all_in_column,
  select_all_not_in,
  select_all_not_in_column,
  select_one
} from './select'

export const db_request = {
  create,
  delete_where,
  update,
  select_one,
  select_all,
  select_all_in,
  select_all_column,
  select_all_in_column,
  select_all_not_in,
  select_all_not_in_column
}
